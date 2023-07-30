import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button, Form, Table } from "react-bootstrap";
import moment from "moment";

function App() {
  const [students, setStudents] = useState<any>([]);
  const [name, setName] = useState("");
  const [hasAttended, setHasAttended] = useState(false);
  const [attendedDate, setAttendedDate] = useState("");
  const [editingId, setEditingId] = useState<any>(null);

  const apiURL = "https://workshop-day-1.vercel.app";

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    const response = await axios.get(`${apiURL}/students`);

    setStudents(response.data.data);
  }

  const handleCreate = async () => {
    const response: any = await axios.post(`${apiURL}/students`, {
      name,
      hasAttended,
      attendedDate,
    });
    setStudents([...students, response.data.data]);
    setName("");
    setHasAttended(false);
    setAttendedDate("");
  };

  const handleUpdate = async (id: string) => {
    const response: any = await axios.patch(`${apiURL}/students/${id}`, {
      name,
      hasAttended,
      attendedDate,
    });
    const updatedStudent = students.map((student: any) => {
      return student._id === id
        ? { ...student, name, hasAttended, attendedDate }
        : student;
    });
    setStudents(updatedStudent);
    setName("");
    setHasAttended(false);
    setAttendedDate("");
    setEditingId(null);
  };

  const handleEdit = (id: string) => {
    const student = students.find((stundet: any) => stundet._id === id);
    if (student) {
      setName(student.name);
      setHasAttended(student.hasAttended);
      setAttendedDate(moment(student.attendedDate).format("YYYY-MM-DD"));
      setEditingId(id);
    }
  };

  async function handleDelete(id: string) {
    const response = await axios.delete(`${apiURL}/students/${id}`);
    if (response.data.status) {
      const filteredStundent = students.filter((student: any) => {
        return student._id !== id;
      });
      setStudents(filteredStundent);
    }
  }

  function handleCancelEdit() {
    setName("");
    setHasAttended(false);
    setAttendedDate("");
    setEditingId(null);
  }
  return (
    <>
      <Container className="mt-3">
        <h1>Student attendance system</h1>
        <Form className="mb-3">
          <Form.Group controlId="name" className="mb-3">
            <Form.Control
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group controlId="hasAttended" className="mb-3">
            <Form.Check
              type="checkbox"
              checked={hasAttended}
              onChange={(e: any) => setHasAttended(e.target.checked)}
              label="Attended"
            />
          </Form.Group>
          <Form.Group controlId="attendedDate" className="mb-3">
            <Form.Control
              type="date"
              value={attendedDate}
              onChange={(e: any) => setAttendedDate(e.target.value)}
              placeholder="Attended Date"
            />
          </Form.Group>

          {editingId ? (
            <div>
              <Button variant="primary" onClick={() => handleUpdate(editingId)}>
                Update
              </Button>
              <Button variant="primary" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant="primary" onClick={handleCreate}>
              Add Student
            </Button>
          )}
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Attended</th>
              <th>Attended Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any) => {
              return (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{String(student.hasAttended)}</td>
                  <td>{moment(student.attendedDate).format("YYYY-MM-DD")}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => handleEdit(student._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(student._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
