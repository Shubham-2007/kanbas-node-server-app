import Database from "../Database/index.js"

function AssignmentRoutes(app) {

    app.get("/api/assignments", (req, res) => {
		const assignments = Database.assignments
		res.send(assignments)
	})


	app.post("/api/assignments", (req, res) => {
		const assignment = { ...req.body, _id: new Date().getTime().toString() }
		Database.assignments.push(assignment)
		res.send(assignment)
	})


	app.delete("/api/assignments/:id", (req, res) => {
		const { id } = req.params
		console.log(Database.assignments.length, "Length before deleting", id)
		Database.assignments = Database.assignments.filter((c) => c._id !== id)
		console.log(assignments.courses.length, "Length after deleting")
		res.sendStatus(204)
	})


	app.put("/api/assignments/:id", (req, res) => {
		const { id } = req.params
		const assignment = req.body
		Database.assignments = Database.assignments.map((c) =>
			c._id === id ? { ...assignment } : c
		)
        res.send(assignment)
		res.sendStatus(204)
	})


	app.get("/api/assignments/:id", (req, res) => {
		const { id } = req.params
		const assignment = Database.assignments.find((c) => c._id === id)
		if (!assignment) {
			res.status(404).send("assignment not found")
			return
		}
		res.send(assignment)
	})
	
}

export default AssignmentRoutes