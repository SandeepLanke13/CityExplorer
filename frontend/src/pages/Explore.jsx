import { useEffect, useMemo, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import Map from "../components/Map.jsx";
import { api } from "../api.js";

export default function Explore() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    api.categories().then(setCategories);
  }, []);

  async function runSearch() {
    const params = {};
    if (q) params.q = q;
    if (type) params.type = type;
    if (categoryId) params.categoryId = categoryId;
    const rows = await api.places(params);
    setResults(rows);
  }

  useEffect(() => {
    runSearch();
  }, []);

  const markers = useMemo(
    () =>
      results.map((r) => ({
        lat: r.lat,
        lng: r.lng,
        title: r.name,
        subtitle: r.type,
      })),
    [results]
  );

  return (
    <div className="container">
      <NavBar />
      <div className="panel">
        <div className="filters">
          <input
            placeholder="Search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All Types</option>
            <option>Restaurant</option>
            <option>Theatre</option>
            <option>Attraction</option>
            <option>Nightlife</option>
            <option>Religious</option>
          </select>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <button onClick={runSearch}>Search</button>
        </div>
      </div>

      <section className="grid">
        {results.map((r) => (
          <div key={r.id} className="tile">
            <h3>{r.name}</h3>
            <p className="muted">
              {r.type} • ⭐ {r.rating}{" "}
              {r.price_range ? `• ${r.price_range}` : ""}
            </p>
            <p>{r.description}</p>
          </div>
        ))}
      </section>

      <section className="panel mt">
        <div style={{ height: "360px" }}>
          <Map markers={markers} />
        </div>
      </section>
    </div>
  );
}
