import { useState, useEffect } from "react";
import { api } from "../lib/axios";

export function useFetchUserPosts(user, posts) {
    const [userPosts, setUserPosts] = useState([]);

    async function fetchPosts() {
		const lastBlog = userPosts[userPosts.length - 1];
		const request = await api.v1.get(`/post/get?after=${lastBlog?.id}&user=${user.id}&category=story&isStory=true`);
		setUserPosts(posts => [...posts, ...(request.data?.success || [])]);
	}

	useEffect(() => setUserPosts(posts), [posts]);

    return { userPosts, fetchPosts };
}