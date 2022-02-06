type SerializationOptions = {
  formatting?: {
    // indent?: number;
    // "indent-lavel"?: number;
    getIndent?: () => number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
  // const indent = options?.formatting?.indent;
  // const indent = options?.formatting?.["indent-lavel"];
  const indent = options?.formatting?.getIndent?.();

  return JSON.stringify(value, null, indent);
}

const user = {
  name: "Ramon Mello",
  github: "ramonmello",
};

const json = serializeJSON(user, { formatting: { getIndent: () => 2 } });

console.log(json);
