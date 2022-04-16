import React, { useCallback } from "react";

export default function UseHttp() {
    const request = useCallback(async (url, method = "GET", body = null, headers = {"Content-type": "application/json"}) => {
        try {
            const response = await fetch(url, { method, body, headers });
            if (!response.ok) {
                throw new Error(`Could not ${response} status ${response.status}`)
            }
            const data = await response.json();
            return data
        }
        catch (e) {
            console.log(e, "Bizda error");
        }
    }, [])
    return { request }
}