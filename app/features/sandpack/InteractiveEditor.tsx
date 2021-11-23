import { Sandpack } from "@codesandbox/sandpack-react";

import useAsyncData from "~/hooks/useAsyncData";

const fetchDemoFiles = async (slug) => {
  return fetch("/sandpack/" + slug).then((res) => res.json());
};
export default function InteractiveEditor({ slug = "" }) {
  let { data } = useAsyncData(fetchDemoFiles, [slug], null);

  if (!data) {
    return null;
  }

  return (
    <Sandpack
      template="vanilla-ts"
      files={data.demo}
      customSetup={{
        dependencies: {
          refinerdb: "next",
        },
        entry: "index.html",
      }}
      options={{
        editorHeight: 700,
        showLineNumbers: true,
        showInlineErrors: true,
      }}
    />
  );
}
