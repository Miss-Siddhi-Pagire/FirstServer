const STUDENTS = [
    {
        id: 1,
        name: "Siddhi",
        city: "Vambori"
    },
];

const getHealth = (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
    });
};

const getStudents = (req, res) => {
    res.json({
        success: true,
        data: STUDENTS,
        message: "Student fetch successfully",
    });
};

const getStudentsById = (req, res) => {
    const id = Number(req.params.id); // Safer conversion
    const student = STUDENTS.find(stud => stud.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: `Student with ID ${id} does not exist.`,
        });
    }

    return res.status(200).json({
        success: true,
        data: student,
        message: `Student with ID ${id} fetched successfully.`,
    });
};

const postStudents = (req, res) => {
    const { name, city, id } = req.body;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "ID is required",
        });
    }
    if (!name) {
        return res.json({
            success: false,
            message: "Name is required",
        });
    }
    if (!city) {
        return res.json({
            success: false,
            message: "City is required",
        });
    }

    const existing = STUDENTS.find((s) => s.id === id);
    if (existing) {
        return res.json({
            success: false,
            message: "Student with this ID already exists",
        });
    }

    const studentObj = { id, name, city };
    STUDENTS.push(studentObj);

    res.json({
        success: true,
        data: studentObj,
        message: "Student created successfully",
    });
};

const deleteStudents = (req, res) => {
    const id = parseInt(req.params.id);
    const index = STUDENTS.findIndex((stud) => stud.id === id);

    if (index === -1) {
        return res.json({
            success: false,
            message: `Student with id : ${id} does not exist`,
        });
    }

    STUDENTS.splice(index, 1);

    return res.status(200).json({
        success: true,
        message: `Student with id : ${id} deleted successfully`,
    });
};

const putStudents = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, city } = req.body;

    if (!name) {
        return res.json({
            success: false,
            message: "Name is required",
        });
    }
    if (!city) {
        return res.json({
            success: false,
            message: "City is required",
        });
    }

    const index = STUDENTS.findIndex((stud) => stud.id === id);

    if (index === -1) {
        return res.json({
            success: false,
            message: `Student with id : ${id} does not exist`,
        });
    }

    STUDENTS[index] = { id, name, city };

    return res.json({
        success: true,
        data: STUDENTS[index],
        message: `Student with id : ${id} updated successfully`,
    });
};

const patchStudents = (req, res) => {
    const id = parseInt(req.params.id);
    const { city } = req.body;

    const index = STUDENTS.findIndex((stud) => stud.id === id);

    if (index === -1) {
        return res.json({
            success: false,
            message: `Student with id : ${id} does not exist`,
        });
    }

    STUDENTS[index] = {
        ...STUDENTS[index],
        city,
    };

    res.json({
        success: true,
        data: STUDENTS[index],
        message: `Student with id : ${id} updated successfully`,
    });
};

export {
    getHealth,
    getStudents,
    getStudentsById,
    postStudents,
    deleteStudents,
    putStudents,
    patchStudents,
};
