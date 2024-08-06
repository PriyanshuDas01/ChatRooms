import { httpRouter } from "convex/server"; 
import { httpAction } from "./_generated/server"; 
import { WebhookEvent } from "@clerk/nextjs/dist/types/server";

import { Webhook } from "svix";

const validatePayload = async (req: Request

): Promise<WebhookEvent | undefined> => {
    const payload = await req.text();

    const svixHeaders = {

        "svix-id": req.headers.get("svix-id")!,

        "svix-timestamp": req.headers.get("svix-timestamp")!,

        "svix-signature": req.headers.get("svix-signature")!,

    };
}
const webhook=new Webhook(process.env. CLERK_WEBHOOK_SECRET || "");


const http = httpRouter()

http.route({

path: "/clerk-users-webhook",

method: "POST",

    handler: handleClerkWebhook



})

export default http;