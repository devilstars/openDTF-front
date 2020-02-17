<template>
    <div class="hover:border-purple-500"
         :class="[{'pl-3 border-dotted border-l' : level[0].depth > 0}]">
        <template v-for="item in level">

            <post-comment-item :key="'comment_' + item.id" :item="item" />

            <template v-if="item.children.length">
                <post-comment-level :key="'comment_level_' + item.id" :level="item.children" />
            </template>

        </template>
    </div>
</template>

<script>
    import PostCommentItem from "./PostCommentItem";
    export default {
        name: "PostCommentLevel",
        components: {PostCommentItem},
        props: [
            'level',
        ],
    }
</script>

<style scoped>

</style>
