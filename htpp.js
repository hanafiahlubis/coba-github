import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/b" && req.method === "POST")
    res.end("berhasil menjalankan Post di url /b");
});

server.listen(3000, console.log("berhasil di jalankan"));
