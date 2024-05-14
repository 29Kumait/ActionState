#!/bin/sh
# ---------------------------------------------------------------------
# JetBrains Space Automation updater entry point script
# ---------------------------------------------------------------------
set -e

this_script="$0"
command_name=$1
workingdir=`dirname "$this_script"`
javadir="$workingdir/java"
cd "$workingdir" || exit 1

import_custom_certificates_to_java_cacerts() {
    certificates_dir="/tmp/jetbrains/space/automation/worker/certificates"
    # Check that dir with certificates exist, return if not.
    [ ! -d "$certificates_dir" ] && return

    echo "Importing certificates from $certificates_dir directory..."
    for certificate_file in "$certificates_dir"/*; do
      # When there are no files for loop executes with a file
      # which is equal to part after `in`, skip it
      [ -e "$certificate_file" ] || continue

      # When a certificate with the same alias exists in cacerts
      # keytool finishes with an exception
      certificate_alias="$(date +%s)-$(basename "$certificate_file")"
      echo "Importing '$certificate_file' certificate with alias '$certificate_alias' ..."

      # changeit is a default java cacerts store pass
      "$javadir/bin/keytool" -import -trustcacerts -cacerts -noprompt -storepass changeit -file "$certificate_file" -v -alias "$certificate_alias"
    done
}

# Worker Java memory options
SPACE_UPDATER_MEM_OPTS_ACTUAL="$SPACE_UPDATER_MEM_OPTS"

if [ "$SPACE_UPDATER_MEM_OPTS_ACTUAL" = "" ]; then
    SPACE_UPDATER_MEM_OPTS_ACTUAL="-Xms16m -Xmx64m"
fi

# uncomment for debugging OOM errors:
#    SPACE_UPDATER_MEM_OPTS_ACTUAL="$SPACE_UPDATER_MEM_OPTS_ACTUAL -XX:+HeapDumpOnOutOfMemoryError"

SPACE_UPDATER_OPTS_ACTUAL="$SPACE_UPDATER_OPTS -ea $SPACE_UPDATER_MEM_OPTS_ACTUAL"

if [ "$command_name" = "start" ] ; then
    echo "Starting Space Automation worker..."
    import_custom_certificates_to_java_cacerts
    chmod +x "$javadir/bin/java"
    exec "$javadir/bin/java" $SPACE_UPDATER_OPTS_ACTUAL -jar space-automation-worker-updater.jar "$@"
fi

echo "JetBrains Space Automation worker"
echo "Usage: "
echo "$this_script start     - to start worker in current console"
exit 1
