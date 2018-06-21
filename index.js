import axios from 'axios';

export default {
    methods: {
        httpGet: function (url) {
            return axios.get(url, {
                params: Object.assign({}, this.settings.baseParams, this.params),
            });
        },
    }
}