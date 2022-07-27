<template>
  <div
    id="app"
    class="antialiased leading-none md:flex md:flex-cols md:items-center md:justify-center bg-white"
  >
    <div class="pb-36 max-w-2xl mx-auto my-10">
      <div class="flex flex-row gap-x-2 mb-4">
        <NIcon class="xs" />
        <NIcon class="sm" />
        <NIcon class="md" />
        <NIcon class="lg" />
        <NIcon class="xl" />
        <NIcon class="xxl" />
      </div>

      <div class="flex flex-row gap-x-2 mb-4">
        <NIcon class="text-primary" />
        <NIcon class="text-secondary" />
        <NIcon class="text-danger" />
      </div>

      <div class="flex gap-4 mb-4">
        <NButtonGroup>
          <NButton icon="home" class="lg primary"> Example </NButton>
          <NButton icon="home" disabled class="md secondary">Example</NButton>
          <NButton icon="home" class="sm info">Example</NButton>
        </NButtonGroup>
      </div>

      <div class="flex gap-4 mb-4">
        <NButton>Example</NButton>
        <NButton class="primary">Example</NButton>
        <NButton class="secondary">Example</NButton>
        <NButton class="success">Example</NButton>
        <NButton class="info">Example</NButton>
        <NButton class="danger">Example</NButton>
        <NButton class="outline">Example</NButton>
      </div>

      <div class="flex gap-4 mb-4">
        <NButton class="lg">Example</NButton>
        <NButton class="md">Example</NButton>
        <NButton class="sm">Example</NButton>
        <NIconButton icon="home" class="xl" />
        <NIconButton icon="home" class="primary lg" />
        <NIconButton icon="home" class="secondary md" />
        <NIconButton icon="home" class="info sm" />
        <NIconButton icon="home" class="danger xs" />
      </div>

      <div class="flex gap-4 mb-4">
        <NToggleButton :value="true" />
        <NToggleButton :value="true" class="primary" />
        <NToggleButton :value="true" class="secondary" />
        <NToggleButton :value="true" class="info" />
        <NToggleButton :value="true" class="danger" />
      </div>

      <div class="flex gap-4 mb-4">
        <NToggleSwitch :labels="true" :value="true" />
        <NToggleSwitch :labels="true" :value="true" class="primary" />
        <NToggleSwitch :labels="true" :value="true" class="secondary" />
        <NToggleSwitch :labels="true" :value="true" class="info" />
        <NToggleSwitch :labels="true" :value="true" class="danger" />
      </div>

      <div class="flex gap-4 mb-4">
        <NCheckbox label="Label" checked />
        <NCheckbox label="Label" checked class="primary" />
        <NCheckbox label="Label" checked class="secondary" />
        <NCheckbox label="Label" checked class="success" />
        <NCheckbox label="Label" checked class="info" />
        <NCheckbox label="Label" checked class="danger" />
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NBullet class="text-primary sm" />
        <NBullet class="text-secondary md" />
        <NBullet class="text-info lg" />
        <NBullet class="text-danger xl" />
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NBadge>Badge</NBadge>
        <NBadge class="primary">Badge</NBadge>
        <NBadge class="secondary">Badge</NBadge>
        <NBadge class="success">Badge</NBadge>
        <NBadge class="info">Badge</NBadge>
        <NBadge class="danger">Badge</NBadge>
        <NBadge class="outline">Badge</NBadge>
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NAvatar fullname="John Doe" />
        <NAvatar class="primary" fullname="John Doe" />
        <NAvatar class="secondary" fullname="John Doe" />
        <NAvatar class="info" fullname="John Doe" />
        <NAvatar class="danger" fullname="John Doe" />
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NAvatar
          class="xs"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="sm"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="md"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="lg"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="xl"
          status="dont_disturb"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="xxl"
          status="online"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
      </div>

      <div class="grid grid-cols-4 gap-4 mb-4">
        <NWidget title="Widget"></NWidget>
        <NWidget title="Widget"></NWidget>
        <NWidget title="Widget"></NWidget>
        <NWidget title="Widget"></NWidget>
      </div>

      <div class="flex gap-x-4 mb-4">
        <NSpin type="wave" />
        <NSpin type="plane" />
        <NSpin type="chase" />
        <NSpin type="bounce" />
        <NSpin type="pulse" />
        <NSpin type="flow" />
        <NSpin type="fold" />
      </div>

      <div class="mb-4">
        <NDropdown>
          <button
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
          >
            Your Profile
          </button>
          <button
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
          >
            Settings
          </button>

          <button
            class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Close me
          </button>
        </NDropdown>
      </div>

      <div class="flex flex-row gap-x-2 mb-4">
        <div
          class="flex justify-center items-center w-24 h-24 bg-gray-300"
          v-tooltip.left="'Left'"
        >
          Tooltip
        </div>
        <div
          class="flex justify-center items-center w-24 h-24 bg-gray-300"
          v-tooltip.top="'Top'"
        >
          Tooltip
        </div>
        <div
          class="flex justify-center items-center w-24 h-24 bg-gray-300"
          v-tooltip.bottom="'Bottom'"
        >
          Tooltip
        </div>
        <div
          class="flex justify-center items-center w-24 h-24 bg-gray-300"
          v-tooltip.right="'Right'"
        >
          Tooltip
        </div>
      </div>

      <div class="mb-4">
        <!-- <NTabs :tabs="tabs" /> -->
      </div>

      <div class="flex flex-col gap-y-2 mb-4">
        <NTable :rows="tableRows" :columns="tableColumns">
          <template #table-row="props">
            <NTableCellThumb v-if="props.column.field === 'image'" />
            <NTableCellActionDropdown
              v-else-if="props.column.type === 'action'"
              :button="{
                icon: 'more',
                class: 'text-gray-500 hover:text-gray-700',
              }"
            >
              <span class="text-danger"> Cancel </span>
            </NTableCellActionDropdown>
            <NTableCellResponsive v-else :props="props" />
          </template>
        </NTable>
      </div>

      <div class="flex flex-col gap-y-2 mb-4">
        <NForm>
          <NFormSection caption="Caption" description="Lorem ipsum dolor">
            <NInputGroup
              label="Title"
              :feedback="validation.error('product.title')"
            >
              <NInput
                v-model="form.product.title"
                placeholder="input ..."
                autofocus
              />
            </NInputGroup>

            <NInputGroup label="Slug">
              <NInput
                prefix="https://localhost:8080/"
                :value="
                  form.product.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                "
                placeholder="input ..."
                disabled
              />
            </NInputGroup>

            <NInputGroup label="Description">
              <NTextarea
                :rows="3"
                v-model="form.product.description"
                placeholder="input ..."
              />
            </NInputGroup>

            <NInputGroup label="Description">
              <NMarkdownArea v-model="form.product.description" />
            </NInputGroup>

            <NColumn>
              <NInputGroup label="Catgeory">
                <NSelect
                  v-model="form.product.category"
                  :options="form.categories"
                  :disabled="true"
                />
              </NInputGroup>

              <NInputGroup
                label="Weight"
                :feedback="validation.error('product.weight')"
              >
                <NInput
                  v-model="form.product.weight"
                  suffix="gram"
                  type="number"
                  placeholder="input ..."
                />
              </NInputGroup>
            </NColumn>

            <NInputGroup label="Price">
              <NInputCurrency
                v-model="form.product.price"
                autofocus
                placeholder="Input price"
              />
            </NInputGroup>

            <NInputGroup label="Tags">
              <NInputTag
                v-model="form.tag"
                :tags="form.product.tags"
                @tags-changed="(newTags) => (form.product.tags = newTags)"
              />
            </NInputGroup>

            <NInputGroup label="Discount">
              <NToggleButton
                class="secondary"
                v-model="form.product.enableDiscount"
                :options="[
                  {
                    label: 'Off',
                    value: 'off',
                  },
                  {
                    label: 'On',
                    value: 'on',
                  },
                ]"
              />
            </NInputGroup>

            <NInputGroup label="Public">
              <NToggleSwitch
                v-tooltip="'You have unchecked new messages.'"
                class="secondary"
                :labels="{ checked: 'Yes', unchecked: 'No' }"
                :sync="true"
                v-model="form.product.isPublic"
              />
            </NInputGroup>

            <NInputGroup label="Categories">
              <div class="flex flex-col gap-y-2">
                <NCheckbox
                  class="secondary"
                  v-for="(item, index) in form.categories"
                  :label="item"
                  :key="index"
                  :value="item"
                  v-model="form.product.categories"
                />
              </div>
            </NInputGroup>

            <NInputGroup label="Media">
              <NFileUpload
                ref="mediaUpload"
                :value="form.product.medias"
                extensions="gif,jpg,jpeg,png,webp"
                accept="image/png,image/gif,image/jpeg,image/webp"
              />
            </NInputGroup>
          </NFormSection>

          <NFormAction @save="submit" />
        </NForm>
        <pre>{{ validation }}</pre>

        <pre>{{ form.product }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { useNFormValidation, useNFormValidators } from "@/composables";
import { onMounted, reactive, ref, computed } from "vue";

export default {
  name: "App",
  setup() {
    const { required, numeric } = useNFormValidators();
    const tableColumns = ref([
      {
        label: "Image",
        field: "image",
        align: "center",
        width: "100px",
        sortable: false,
      },
      {
        label: "Title",
        field: "title",
      },
      {
        label: "Body",
        field: "body",
      },
      {
        label: "Status",
        field: "status",
        align: "center",
        width: "120px",
      },
      {
        label: "",
        field: "action",
        type: "action",
        align: "right",
        width: "60px",
      },
    ]);

    const tabs = ref([
      {
        name: "Overview",
        to: "#overview",
      },
      {
        name: "Notes",
        to: "#notes",
      },
      {
        name: "Address",
        to: "#address",
      },
    ]);

    const tableRows = computed(() => {
      const list = [];

      for (let i = 1; i <= 5; i++) {
        list.push({
          image: `256x256${i}.jpg`,
          title: `Title #${i}`,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          status: `Status #${i}`,
        });
      }

      return list;
    });
    const form = reactive({
      tag: "",
      categories: ["Category 1", "Category 2", "Category 3"],
      product: {
        categories: ["Category 1", "Category 2", "Category 3"],
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        description:
          "Cupiditate cumque quidem vitae ad est libero vel suscipit laboriosam beatae, ex perferendis aliquid nobis qui, quam veniam facere",
        category: "Category 1",
        weight: 200,
        price: 100000,
        enableDiscount: "off",
        isPublic: false,
        tags: [
          {
            text: "Tag1",
          },
          {
            text: "Tag2",
          },
          {
            text: "Tag3",
          },
        ],
        medias: [
          {
            id: "4",
            url: "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg",
            filename: "256x256bb.jpg",
            filesize: 84612,
            ext: "jpg",
            title: null,
          },
        ],
      },
    });
    const rules = reactive({
      product: {
        title: {
          required,
        },
        weight: {
          required,
          numeric,
        },
      },
    });
    const { validation } = useNFormValidation(rules, form);
    const submit = async () => {
      const validationResult = await validation.validate();
      if (!validationResult) {
        alert("Please double check your data and try again");
        return false;
      }
      alert(JSON.stringify(form.product));
    };
    onMounted(() => {
      setTimeout(function () {
        form.product.isPublic = true;
        form.product.enableDiscount = "on";
      }, 4000);
    });
    return { form, tabs, submit, validation, tableColumns, tableRows };
  },
};
</script>
