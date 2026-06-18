//server.js
const express = require("express");
const app = express();
const PORT = 3000;
const students = require("./student");

app.use(express.json());

//1. Welcome Message
app.get("/", (req, res) => {
    res.send("Welcome to Student Api!");
});

//2. Fetch All Students
app.get("/students", (req, res) => {
    res.json(students);
});

//3. Count total students
app.get("/students/count", (req, res) => {
  res.json({ total: students.length });
});

//4. Add a new student
app.post("/students", (req, res) => {
    const newStudent = { id: students.length + 1, ...req.body};
    students.push(newStudent);
  res.status(201).json(newStudent);
});

//5. Delete student by ID
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index !== -1) {
        const deleted = students.splice(index, 1);
    res.json(deleted);
  } else {
    res.status(404).send("Student not found");
    }
});


//6. Update Student Info
app.put("/students/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        Object.assign(student, req.body);
        res.json(student);
    } else {
     res.status(404).send("Student not found");   
    }

});

//7. Search by name
app.get("/students/search/name/:name", (req, res) => {
    const result = students.filter(s => s.name.toLowerCase().includes(req.params.name.toLowerCase()));
    res.json(result);
});

//8. Search by course
app.get("/students/search/course/:course", (req, res) => {
    const result = students.filter(s => s.course.toLowerCase() === req.params.course.toLowerCase());
    res.json(result);
});

//9. Filter by city
app.get("/students/filter/city/:city", (req, res) => {
    const result = students.filter(s => s.city.toLowerCase() === req.params.city.toLowerCase());
    res.json(result);
});

//10. Fees less than amount
app.get("/students/fees/less/:amount", (req, res) => {
  const amount = parseInt(req.params.amount);
  const result = students.filter(s => s.fees < amount);
  res.json(result);
});

//11. Fees greater than amount
app.get("/students/fees/greater/:amount", (req, res) => {
  const amount = parseInt(req.params.amount);
  const result = students.filter(s => s.fees > amount);
  res.json(result);
});

//12. Sort by name
app.get("/students/sort/name", (req, res) => {
    res.json([...students].sort((a,b) => a.name.localeCompare(b.name)));
});

//13. Sort fees low to high
app.get("/students/sort/fees/asc", (req, res) => {
    res.json([...students].sort((a,b) => a.fees - b.fees));
});

//14. Sort fees high to low
app.get("/students/sort/fees/desc", (req, res) => {
    res.json([...students].sort((a,b) => b.fees - a.fees));
});

//15. Check students exist
app.get("/students/exist/:id", (req, res) => {
    const exists = students.some(s => s.id === parseInt(req.params.id));
    res.json({ exists });
});

//16. Total fees collected
app.get("/students/fees/total", (req, res) => {
    const total = students.reduce((sum, s) => sum + s.fees, 0);
    res.json({ total });
});

//17. Course-wise student list
app.get("/students/coursewise", (req, res) => {
    const grouped = students.reduce((acc, s) => {
    acc[s.course] = acc[s.course] || [];
    acc[s.course].push(s);
    return acc;
  }, {});
  res.json(grouped);
});

//18. Add Multiple students
app.post("/students/bulk", (req, res) => {
    req.body.forEach(stu => students.push({ id: students.length + 1, ...stu}));
    res.status(201).json(req.body);
    });

//19. Student report dashboard
app.get("/students/report", (req, res) => {
    const report = students.map(s => ({
        name: s.name,
        course: s.course,
        city: s.city,
        fees: s.fees
    }));
    res.json(report);
});

//20. Fetch Single Student by ID
app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    student ? res.json(student) : res.status(404).send("Student Not Found!");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
