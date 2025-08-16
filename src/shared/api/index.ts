import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTY5MDcwYzI3NTJjZGY2ZjQwNTUyNWVmYzMxOWI3YiIsIm5iZiI6MTc1NTE4NjY2OS45MzEsInN1YiI6IjY4OWUwNWVkNWQzNzYxZDhmYjhkYmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Loi1w7BKmZCa2k6nhxjFhPlu6v_A5FQmFPi3PYTA8I8";

    config.headers.Authorization = `Bearer ${token}`

    return config
})