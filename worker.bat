@echo off

:: ---------------------------------------------------------------------
:: JetBrains Space Automation worker updater point script
:: ---------------------------------------------------------------------

setlocal
setlocal enabledelayedexpansion

SET WORKER_CURRENT_DIR=%CD%
SET JAVA_DIR=%WORKER_CURRENT_DIR%\java
cd /d %~dp0

set QUIET=0

:: Fail fast if command is not supported
IF ""%1"" == ""start"" goto command_ok
goto command_unknown

:command_ok
:: Worker Java memory options
IF not "%SPACE_UPDATER_MEM_OPTS%" == "" goto worker_mem_opts_set
SET SPACE_UPDATER_MEM_OPTS_ACTUAL=-Xms16m -Xmx64m
:: uncomment for debugging OOM errors:
:: SET SPACE_UPDATER_MEM_OPTS_ACTUAL=%SPACE_UPDATER_MEM_OPTS_ACTUAL% -XX:+HeapDumpOnOutOfMemoryError
goto worker_mem_opts_set_done

:worker_mem_opts_set
SET SPACE_UPDATER_MEM_OPTS_ACTUAL=%SPACE_UPDATER_MEM_OPTS%

:worker_mem_opts_set_done
SET SPACE_UPDATER_OPTS_ACTUAL=%SPACE_UPDATER_OPTS% -ea %SPACE_UPDATER_MEM_OPTS_ACTUAL%

IF ""%1"" == ""start"" goto start
goto command_unknown

:command_unknown
echo Error parsing command line.
echo ----------------------------------------
echo Usage: worker.bat COMMAND
echo start      - starts the agent in new console window
echo ----------------------------------------
goto done

:start
echo "Starting Space Automation worker..."
CALL :import_custom_certificates_to_java_cacerts
set JAVA_EXE=%JAVA_DIR%\bin\java
%JAVA_EXE% %SPACE_UPDATER_OPTS_ACTUAL% -jar space-automation-worker-updater.jar %*
goto done

:import_custom_certificates_to_java_cacerts
set CERTIFICATES_DIR=C:\jetbrains\space\automation\worker\certificates
:: Check that dir with certificates exist, return if not.
if not exist %CERTIFICATES_DIR%\ EXIT /B 0

echo Importing certificates from "%CERTIFICATES_DIR%" directory...
for %%f in (%CERTIFICATES_DIR%\*) do (
@REM When a certificate with the same alias exists in cacerts
@REM keytool finishes with an exception
set CERTIFICATE_ALIAS=%date%-%time%-%%~nf
echo Importing "%%f" certificate with alias "!CERTIFICATE_ALIAS!" ...
%JAVA_DIR%/bin/keytool -import -trustcacerts -cacerts -noprompt -storepass changeit -file %%f -v -alias !CERTIFICATE_ALIAS!
)
EXIT /B 0

:done
echo Done.
