import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { defaultFieldResolver } from "graphql";

export function authDirectiveTransformer(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      const authDirective = getDirective(schema, fieldConfig, "auth")?.[0];
      if (authDirective) {
        const { requires } = authDirective;
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = function (source, args, context, info) {
          if (!context.user)
            throw new Error("Unauthorized");

          if (requires && context.user.role !== requires)
            throw new Error("Forbidden");

          return resolve(source, args, context, info);
        };
      }
      return fieldConfig;
    }
  });
}