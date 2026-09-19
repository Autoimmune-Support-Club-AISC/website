"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState<"blog" | "whitepaper">("blog");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        type,
        createdAt: new Date(),
        author: user?.email,
      });
      setMessage("Post created successfully!");
      setTitle("");
      setContent("");
    } catch (e) {
      console.error("Error adding document: ", e);
      setMessage("Error creating post.");
    }
  };

  if (loading || !user) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-4">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button onClick={logout} className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-6">Create New {type === "blog" ? "Blog Post" : "Whitepaper"}</h2>
              
              {message && <p className="mb-4 text-green-400">{message}</p>}

              <form onSubmit={handlePost} className="space-y-4">
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setType("blog")}
                    className={`px-4 py-2 rounded ${type === "blog" ? "bg-white text-black" : "bg-zinc-800 text-zinc-400"}`}
                  >
                    Blog
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("whitepaper")}
                    className={`px-4 py-2 rounded ${type === "whitepaper" ? "bg-white text-black" : "bg-zinc-800 text-zinc-400"}`}
                  >
                    Whitepaper
                  </button>
                </div>

                <div>
                  <label className="block text-sm mb-1 text-zinc-400">Title</label>
                  <input
                    className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-white focus:outline-none focus:border-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-zinc-400">Content</label>
                  <textarea
                    className="w-full h-64 bg-zinc-800 border border-zinc-700 rounded p-2 text-white focus:outline-none focus:border-white font-mono text-sm"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your content here (Markdown supported if implemented)..."
                  />
                </div>

                <button type="submit" className="w-full py-3 bg-blue-600 rounded font-bold hover:bg-blue-500 transition">
                  Publish
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <p className="text-zinc-400">Total Posts: <span className="text-white font-bold">0</span></p>
              <p className="text-zinc-400 mt-2">Last Login: <span className="text-white">{new Date().toLocaleDateString()}</span></p>
              
              <div className="mt-8">
                <h4 className="font-medium mb-2">Instructions</h4>
                <ul className="text-sm text-zinc-400 list-disc list-inside space-y-2">
                  <li>Select type (Blog vs Whitepaper)</li>
                  <li>Write content</li>
                  <li>Click publish to save to Firestore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
