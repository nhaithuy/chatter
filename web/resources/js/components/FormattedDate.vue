<script>
export default {
    props: ['dateIso'],
    data() {
        return {
        };
    },
    computed: {
        convert_date() {
            let date = new Date(this.dateIso).toLocaleDateString()
            let time = new Date(this.dateIso).toLocaleTimeString([], {
                timeStyle: 'short'
            })

            return date + ' ' + time
        }
    },
}
</script>

<template>
        <span>
            {{ convert_date }}
        </span>
</template>
