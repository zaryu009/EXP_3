import React, { useState } from 'react';

const SchoolSystem = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", grade: "10th", age: 15 },
    { id: 2, name: "Priya Patel", grade: "12th", age: 17 },
    { id: 3, name: "Amit Kumar", grade: "9th", age: 14 }
  ]);

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [age, setAge] = useState("");

  const addStudent = (e) => {
    e.preventDefault();
    if (!name || !grade || !age) return;
    setStudents([...students, { id: Date.now(), name, grade, age }]);
    setName("");
    setGrade("");
    setAge("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Student Registry</h1>
        <p style={styles.subtitle}>Manage school records</p>
      </header>

      <div style={styles.grid}>
        {/* Add Student Form */}
        <div style={styles.formCard}>
          <h3>Register Student</h3>
          <form onSubmit={addStudent} style={styles.form}>
            <input style={styles.input} placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
            <input style={styles.input} placeholder="Grade (e.g. 10th)" value={grade} onChange={e => setGrade(e.target.value)} />
            <input style={styles.input} placeholder="Age" type="number" value={age} onChange={e => setAge(e.target.value)} />
            <button style={styles.btnAdd} type="submit">Register</button>
          </form>
        </div>

        {/* Student List */}
        <div style={styles.listContainer}>
          {students.map(student => (
            <div key={student.id} style={styles.studentCard}>
              <div style={styles.avatar}>{student.name.charAt(0)}</div>
              <div style={styles.info}>
                <h4 style={styles.name}>{student.name}</h4>
                <div style={styles.meta}>
                  <span style={styles.tag}>Class: {student.grade}</span>
                  <span style={styles.tag}>Age: {student.age}</span>
                </div>
              </div>
              <button onClick={() => deleteStudent(student.id)} style={styles.btnDelete}>×</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '1000px', margin: '40px auto', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '2.5rem', fontWeight: '800', color: '#1f2937' },
  subtitle: { color: '#6b7280' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' },
  formCard: { background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' },
  btnAdd: { padding: '12px', background: '#059669', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '15px' },
  studentCard: { background: 'white', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  avatar: { width: '40px', height: '40px', background: '#d1fae5', color: '#059669', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' },
  info: { flex: 1 },
  name: { margin: '0 0 5px 0', fontSize: '1.1rem', color: '#374151' },
  meta: { display: 'flex', gap: '10px' },
  tag: { fontSize: '0.8rem', background: '#f3f4f6', padding: '2px 8px', borderRadius: '4px', color: '#6b7280' },
  btnDelete: { background: 'transparent', border: 'none', color: '#ef4444', fontSize: '1.5rem', cursor: 'pointer' }
};

export default SchoolSystem;