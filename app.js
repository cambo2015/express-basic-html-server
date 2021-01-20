import express from "express"
import print from "./functions/print"
import path from "path"
//vars
const port = 3000

const app = express()
const base = path.join(__dirname, "public")
app.use(express.static(base))

app.get("/about", (req, res) => {
	return res.sendFile(path.join(base,"about.html"))
})

app.get("/shop", (req, res) => {
	return res.sendFile(path.join(base,"shop.html"))
})


app.listen(port, () => {
	print(`Listening on port: ${port}`)
})
