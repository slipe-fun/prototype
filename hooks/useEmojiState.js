import { useState } from "react";

export function useEmojiState(id) {
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

    const handleEmojiClick = (emoji) => {
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
    };

    return { emojis, handleEmojiClick };
}