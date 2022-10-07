import axiosClient from "./axiosApi";

const postApi = {
    getAll: (params?: any) => {
        let url = '/getAllPost';
        return axiosClient.get(url, {params});
    },

    createPost: (data: Object) => {
        let url = '/post';
        return axiosClient.post(url, { data });
    },

    getId: (id: string | null) => {
        let url = `/post/${id}`;
        return axiosClient.get(url);
    }
};

export default postApi;

