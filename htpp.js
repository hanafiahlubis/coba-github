import http from "node:http";

const server = http.createServer((req, res)=>{
    if(req.url === "/a" && req.method === "POST") 
        res.end("berhasil menjalankan Post di url /a");
});

server.listen(3000,console.log("berhasil di jalankan"));