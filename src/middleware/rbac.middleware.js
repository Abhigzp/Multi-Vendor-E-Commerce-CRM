export const authorize = (roles = []) => {
  return (resolver) => {
    return (parent, args, context, info) => {
      if (!context.user) throw new Error("Unauthorized");

      if (!roles.includes(context.user.role))
        throw new Error("Forbidden");

      return resolver(parent, args, context, info);
    };
  };
};