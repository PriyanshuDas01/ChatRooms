import { v } from "convex/values"
import {internalMutation, internalQuery} from "./_generated/server"

export const create = internalMutation({
    
    args: {
        username: v.string(),
        imageUrl: v.string(),
        ClerkId: v.string(),
        email: v.string(),

    },
    handler: async (ctx, args) => {
        await ctx.db.insert("user", args);

    }

    
});
    
export const get = internalQuery({
    args: { ClerkId: v.string() },
    async handler(ctx, args) {
        return ctx.db
            .query("user")
            .withIndex("by_ClerkId", (q) => q.eq
                ("ClerkId", args.ClerkId))
            .unique();
        
    },

});