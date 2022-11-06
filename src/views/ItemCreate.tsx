import { defineComponent, onMounted, PropType, ref } from 'vue';
import { MainLayout } from '../layouts/Mainlayout';
import { Icon } from '../shared/Icon';
import { useTags } from '../shared/useTags';
import { Button } from '../shared/Button';
import { Tab, Tabs } from '../shared/Tabs';
import { http } from '../shared/Http';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
import { Tags } from '../components/tag/Tags';
export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        const refKind = ref('支出')
        const { tags: incomeTags,
            hasMore: hasMore2,
            fetchTags: fetchTags2
        } = useTags((page) => {
            return http.get<Resources<Tag>>('/tags', {
                kind: 'income',
                page: page + 1,
                _mock: 'tagIndex'
            })
        })
        return () => (
            <MainLayout class={s.layout}>{{
                title: () => '记一笔',
                icon: () => <Icon name='left' class={s.navIcon} />,
                default: () => <>
                    <div class={s.wrapper}>
                        <Tabs v-model:selected={refKind.value} class={s.tabs}>
                            <Tab name="支出">
                                <Tags kind="expenses" />
                            </Tab>
                            <Tab name="收入">
                                <Tags kind="income" />
                            </Tab>
                        </Tabs>
                        <div class={s.inputPad_wrapper}>
                            <InputPad />
                        </div>
                    </div >
                </>
            }}</MainLayout >
        )
    }
})