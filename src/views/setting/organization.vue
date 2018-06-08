<style lang="less">

</style>

<template>
    <div>
        <Row>
            <Col>
                <Card>
                    <!-- <Tree :data="data5" :render="renderContent"/> -->
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'brandlist',
    data () {
        return {
            keywords: {
            }
        };
    },
    methods: {
        ...mapActions([
            'PublicCategorys'
        ])
    },
    computed: {
        ...mapGetters(['$publicservice'])
    },
    created () {
        // 类别下拉选项
        this.PublicCategorys().then(data => {
        });
    }
};
</script>
