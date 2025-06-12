import express from 'express';
import cors from "cors";
import { getHealth,getStudents,postStudents,deleteStudents,putStudents ,patchStudents,getStudentsById} from './Controllers/student.js';

const app=express();
app.use(express.json());
app.use(cors());
const PORT=5002;

app.get("/health",getHealth)
app.get("/students",getStudents)
app.post("/students",postStudents)
app.delete("/students/:id",deleteStudents);
app.put("/students/:id",putStudents);
app.get("/students/:id",getStudentsById)


//use to update specific part
app.patch("/students/city/:id",patchStudents)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});