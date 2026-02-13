import React, { useState } from 'react';

const Library = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Dune", author: "Frank Herbert" },
    { id: 3, title: "Deep Work", author: "Cal Newport" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    setBooks([{ id: Date.now(), title, author }, ...books]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => setBooks(books.filter(b => b.id !== id));

  const filteredBooks = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Library Manager</h1>
        <input 
          style={styles.search} 
          placeholder="Search books..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div style={styles.layout}>
        {/* Form */}
        <div style={styles.card}>
          <h3>Add Book</h3>
          <form onSubmit={addBook} style={styles.form}>
            <input style={styles.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input style={styles.input} placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button style={styles.btnPrimary} type="submit">Add Book</button>
          </form>
        </div>

        {/* List */}
        <div style={styles.list}>
          {filteredBooks.map(book => (
            <div key={book.id} style={styles.bookItem}>
              <div>
                <h4 style={{margin: '0 0 5px 0'}}>{book.title}</h4>
                <small style={{color: '#666'}}>{book.author}</small>
              </div>
              <button onClick={() => removeBook(book.id)} style={styles.btnDelete}>Remove</button>
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
  title: { fontSize: '2.5rem', marginBottom: '20px', color: '#1f2937' },
  search: { padding: '15px', width: '100%', maxWidth: '500px', borderRadius: '50px', border: '1px solid #ddd', fontSize: '1rem' },
  layout: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'start' },
  card: { background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ddd' },
  btnPrimary: { padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  list: { display: 'flex', flexDirection: 'column', gap: '15px' },
  bookItem: { background: 'white', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  btnDelete: { background: '#fee2e2', color: '#ef4444', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }
};

export default Library;
