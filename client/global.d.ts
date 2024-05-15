declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "my-element": {
        myElementProps: string;
      };
      "another-element": {
        anotherElementProps: number;
      };
      "yet-another-element": {
        yetAnotherElementProps: boolean;
      };
    }
  }
}
