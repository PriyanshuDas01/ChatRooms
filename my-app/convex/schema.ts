import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    user: defineTable({
        username: v.string(),
        imageUrl: v.string(),
        ClerkId: v.string(),
        email: v.string(),


    })

        .index("by_email", ["email"])
        .index("by_ClerkId", ["ClerkId"]),
    
    

        
})
