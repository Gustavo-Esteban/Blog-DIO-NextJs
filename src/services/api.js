import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cdvonwvcvjfvocljtuzl.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdm9ud3Zjdmpmdm9jbGp0dXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzOTYzMjksImV4cCI6MjAxODk3MjMyOX0.2jYJhcfomdWMcgz7GFJozQ1xsvFyn5qQwikwA8fmXr8",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdm9ud3Zjdmpmdm9jbGp0dXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzOTYzMjksImV4cCI6MjAxODk3MjMyOX0.2jYJhcfomdWMcgz7GFJozQ1xsvFyn5qQwikwA8fmXr8"
    }
})