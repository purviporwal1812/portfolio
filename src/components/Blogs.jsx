import React from "react";
import "../styles/BlogPage.css";

// Add/remove posts here. "date" is used for display and for sorting within a year
// (newest first) — use any parseable date string, e.g. "2026-08-21".
const posts = [
  {
    date: "2026-08-04",
    displayDate: "Aug 4",
    title: "Figuring the way out?",
    url: "https://medium.com/@purviporwal1812/figuring-the-way-out-3d7e932eb5d3?sharedUserId=purviporwal1812",
  },
  {
    date: "2026-08-09",
    displayDate: "Aug 09",
    title: "DAG for AI Agents",
    url: "https://medium.com/@purviporwal1812/dag-for-ai-agents-6ec8495c6081?sharedUserId=purviporwal1812",
  },

];

// Group posts by year, newest year first, newest post first within each year.
function groupByYear(items) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const groups = new Map();
  for (const post of sorted) {
    const year = new Date(post.date).getFullYear();
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(post);
  }
  return Array.from(groups.entries()); // [[year, [posts]], ...]
}

const Blogs = () => {
  const grouped = groupByYear(posts);

  return (
    <div className="blog-page">
      {posts.length === 0 ? (
        <p className="list-page-empty">No posts yet — check back soon.</p>
      ) : (
        grouped.map(([year, yearPosts]) => (
          <section key={year}>
            <h1 className="blog-year-heading">
              Blogs <span className="count">({yearPosts.length})</span>
            </h1>
            <h6>Long form essays on AI systems, philosophy etc. </h6>
            <hr className="blog-year-divider" />
            <ul className="blog-row-list">
              {yearPosts.map((post, idx) => (
                <li className="blog-row" key={idx}>
                  <span className="blog-date">{post.displayDate}</span>
                  <div>
                    <a
                      className="blog-title-link"
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {post.title}
                    </a>
                    <div className="blog-tags">
                      {post.category && (
                        <span className="blog-tag category">
                          {post.category}
                        </span>
                      )}
                      {post.tags?.map((tag) => (
                        <span className="blog-tag hashtag" key={tag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
};

export default Blogs;