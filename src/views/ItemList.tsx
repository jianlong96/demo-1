import { defineComponent } from "vue";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
import { ItemSummary } from "../shared/ItemSummary";
export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout component={ItemSummary} />;
  },
});
