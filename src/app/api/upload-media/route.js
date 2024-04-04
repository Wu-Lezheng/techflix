import { NextResponse } from "next/server";
import busboy from "busboy";
import fs from "fs";

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

export async function POST(req, res) {
    const bb = busboy({ headers: req.headers })

    bb.on('file', (_, file, info) => {
        const fileName = info.filename;
        const filePath = `@/videos/${fileName}`;
        const stream = fs.createWriteStream(filePath);
        file.pipe(stream);
    });

    bb.on('close', () => {
        res.writeHead(200, { Connection: "closed" });
        res.end("That's the end")
    });

    req.pipe(bb);
    return;
}