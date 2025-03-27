import { useState, useEffect } from "react";
import { api } from "../lib/axios";

export function useEmojiState(post) {
    const [emojis, setEmojis] = useState({
        "0_16": {
            count: 0,
            isActive: false
        },
        "0_29": {
            count: 0,
            isActive: false
        },
        "0_32": {
            count: 0,
            isActive: false
        },
        "0_39": {
            count: 0,
            isActive: false
        },
        "1_29": {
            count: 0,
            isActive: false
        },
        "1_35": {
            count: 0,
            isActive: false
        }
    });

    useEffect(() => {
        Object.keys(emojis).map(emoji => {
            if (post?.reactions?.length === 0) return;
            const reactionsNames = post?.reactions.map(reaction => reaction.name);
            if (reactionsNames.includes(emoji)) {
                const reaction = post?.reactions.find(reaction => reaction.name === emoji);

                setEmojis(prev => ({
                    ...prev,
                    [emoji]: { count: reaction.count, isActive: reaction.name === post?.reaction }
                }));
            }
        })
    }, [post]);

    const handleEmojiClick = async (emoji) => {
        setEmojis((prev) => {
            const newEmojis = {};
            Object.keys(prev).forEach(key => {
                newEmojis[key] = {
                    count: key === emoji && prev[key].isActive ? prev[key].count - 1 : 
                           key === emoji && !prev[key].isActive ? prev[key].count + 1 :
                           key !== emoji && prev[key].isActive ? prev[key].count - 1 : prev[key].count,
                    isActive: false
                };
            });
            if (!prev[emoji].isActive) {
                newEmojis[emoji].isActive = true;
            }
            return newEmojis;
        });

        const formData = new FormData();
        formData.append("to_post", post?.id);
        formData.append("name", emoji);

        await api.media.post("/reaction/add", formData);
    };

    return { emojis, handleEmojiClick };
}