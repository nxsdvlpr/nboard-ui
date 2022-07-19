<template>
  <div class="n-icon">
    <NIconHome v-if="icon === 'home'" />
    <!-- <NIconBag v-else-if="icon === 'bag'" />
    <NIconTruck v-else-if="icon === 'truck'" />
    <NIconScan v-else-if="icon === 'scan'" />
    <NIconCategory v-else-if="icon === 'category'" /> -->
    <NIconUsers v-else-if="icon === 'users'" />
    <!-- <NIconChart v-else-if="icon === 'chart'" />
    <NIconSetting v-else-if="icon === 'setting'" />
    <NIconSearch v-else-if="icon === 'search'" />
    <NIconNotification v-else-if="icon === 'notification'" />
    <NIconLogout v-else-if="icon === 'logout'" />
    <NIconMenu v-else-if="icon === 'menu'" />
    <NIconClose v-else-if="icon === 'close'" />
    <NIconDownload v-else-if="icon === 'download'" /> -->
    <NIconDelete v-else-if="icon === 'delete'" />
    <!-- <NIconMore v-else-if="icon === 'more'" />
    <NIconChat v-else-if="icon === 'chat'" />
    <NIconAdd v-else-if="icon === 'add'" />
    <NIconCalendar v-else-if="icon === 'calendar'" />
    <NIconDone v-else-if="icon === 'done'" />
    <NIconEdit v-else-if="icon === 'edit'" />
    <NIconFail v-else-if="icon === 'fail'" />
    <NIconFilter v-else-if="icon === 'filter'" />
    <NIconHide v-else-if="icon === 'hide'" />
    <NIconImage v-else-if="icon === 'image'" />
    <NIconLocation v-else-if="icon === 'location'" />
    <NIconMoreCircle v-else-if="icon === 'more-circle'" />
    <NIconMoreSquare v-else-if="icon === 'more-square'" />
    <NIconArrowDown v-else-if="icon === 'arrow-down'" />
    <NIconArrowDown2 v-else-if="icon === 'arrow-down-2'" />
    <NIconArrowDown3 v-else-if="icon === 'arrow-down-3'" />
    <NIconArrowDownCircle v-else-if="icon === 'arrow-down-circle'" />
    <NIconArrowDownSquare v-else-if="icon === 'arrow-down-square'" />
    <NIconArrowRight v-else-if="icon === 'arrow-right'" />
    <NIconArrowRight2 v-else-if="icon === 'arrow-right-2'" />
    <NIconArrowRight3 v-else-if="icon === 'arrow-right-3'" />
    <NIconArrowRightCircle v-else-if="icon === 'arrow-right-circle'" />
    <NIconArrowRightSquare v-else-if="icon === 'arrow-right-square'" />
    <NIconArrowUp v-else-if="icon === 'arrow-up'" />
    <NIconArrowUp2 v-else-if="icon === 'arrow-up-2'" />
    <NIconArrowUp3 v-else-if="icon === 'arrow-up-3'" />
    <NIconArrowUpCircle v-else-if="icon === 'arrow-up-circle'" />
    <NIconArrowUpSquare v-else-if="icon === 'arrow-up-square'" />
    <NIconArrowLeft v-else-if="icon === 'arrow-left'" />
    <NIconArrowLeft2 v-else-if="icon === 'arrow-left-2'" />
    <NIconArrowLeft3 v-else-if="icon === 'arrow-left-3'" />
    <NIconArrowLeftCircle v-else-if="icon === 'arrow-left-circle'" />
    <NIconArrowLeftSquare v-else-if="icon === 'arrow-left-square'" />
    <NIconShow v-else-if="icon === 'show'" />
    <NIconSwap v-else-if="icon === 'swap'" />
    <NIconTick v-else-if="icon === 'tick'" />
    <NIconUpload v-else-if="icon === 'upload'" />
    <NIconPaper v-else-if="icon === 'paper'" />
    <NIconMoney v-else-if="icon === 'money'" />
    <NIconFolder v-else-if="icon === 'folder'" />
    <NIconWallet v-else-if="icon === 'wallet'" />
    <NIconGraph v-else-if="icon === 'graph'" />
    <NIconBookmark v-else-if="icon === 'bookmark'" />
    <NIconHeart v-else-if="icon === 'heart'" />
    <NIconPaperNegative v-else-if="icon === 'paper-negative'" />
    <NIconPaperFail v-else-if="icon === 'paper-fail'" />
    <NIconPaperDownload v-else-if="icon === 'paper-download'" />
    <NIconPaperUpload v-else-if="icon === 'paper-upload'" />
    <NIconSend v-else-if="icon === 'send'" />
    <NIconPassword v-else-if="icon === 'password'" />
    <NIconWork v-else-if="icon === 'work'" />
    <NIconActivity v-else-if="icon === 'activity'" />
    <NIconMessage v-else-if="icon === 'message'" />
    <NIconVideo v-else-if="icon === 'video'" />
    <NIconPlus v-else-if="icon === 'plus'" />
    <NIconGame v-else-if="icon === 'game'" />
    <NIconBag3 v-else-if="icon === 'bag-3'" />
    <NIconTicketStar v-else-if="icon === 'ticket-star'" />
    <NIconDiscount v-else-if="icon === 'discount'" />
    <NIconBuy v-else-if="icon === 'buy'" />
    <NIconInfoCircle v-else-if="icon === 'info-circle'" />
    <NIconInfoSquare v-else-if="icon === 'info-square'" />
    <NIconDanger v-else-if="icon === 'danger'" />
    <NIconDiscovery v-else-if="icon === 'discovery'" />
    <NIconDocument v-else-if="icon === 'document'" />
    <NIconTimeSquare v-else-if="icon === 'time-square'" />
    <NIconTimeCircle v-else-if="icon === 'time-circle'" />
    <NIconVolumeUp v-else-if="icon === 'volume-up'" />
    <NIconVolumeDown v-else-if="icon === 'volume-down'" />
    <NIconVolumeOff v-else-if="icon === 'volume-off'" />
    <NIconStar v-else-if="icon === 'star'" />
    <NIconTicket v-else-if="icon === 'ticket'" />
    <NIconCamera v-else-if="icon === 'camera'" />
    <NIconProfile v-else-if="icon === 'profile'" />
    <NIconAddUser v-else-if="icon === 'add-user'" /> -->
    <NIconUsers2 v-else-if="icon === 'users-2'" />
    <!-- <NIconLogin v-else-if="icon === 'login'" />
    <NIconVoice v-else-if="icon === 'voice'" />
    <NIconVoice3 v-else-if="icon === 'voice-3'" />
    <NIconEditSquare v-else-if="icon === 'edit-square'" />
    <NIconPlay v-else-if="icon === 'play'" />
    <NIconFilter3 v-else-if="icon === 'filter-3'" />
    <NIconImage3 v-else-if="icon === 'image-3'" />
    <NIconCall v-else-if="icon === 'call'" />
    <NIconCalling v-else-if="icon === 'calling'" />
    <NIconCallMissed v-else-if="icon === 'call-missed'" />
    <NIconCallSilent v-else-if="icon === 'call-silent'" />
    <NIconLock v-else-if="icon === 'lock'" />
    <NIconUnlock v-else-if="icon === 'unlock'" />
    <NIconWhatsapp v-else-if="icon === 'whatsapp'" />
    <NIconLine v-else-if="icon === 'line'" />
    <NIconTelegram v-else-if="icon === 'telegram'" />
    <NIconFacebook v-else-if="icon === 'facebook'" />
    <NIconDoubleCheckmark v-else-if="icon === 'double-checkmark'" />
    <NIconCheckmark v-else-if="icon === 'checkmark'" /> -->
  </div>
</template>

<script>
import NIconHome from "@/components/NIcon/NIconHome.vue";
// import NIconBag from "@/components/NIcon/NIconBag";
// import NIconTruck from "@/components/NIcon/NIconTruck";
// import NIconScan from "@/components/NIcon/NIconScan";
// import NIconCategory from "@/components/NIcon/NIconCategory";
import NIconUsers from "@/components/NIcon/NIconUsers.vue";
// import NIconChart from "@/components/NIcon/NIconChart";
// import NIconSetting from "@/components/NIcon/NIconSetting";
// import NIconSearch from "@/components/NIcon/NIconSearch";
// import NIconNotification from "@/components/NIcon/NIconNotification";
// import NIconLogout from "@/components/NIcon/NIconLogout";
// import NIconMenu from "@/components/NIcon/NIconMenu";
// import NIconClose from "@/components/NIcon/NIconClose";
// import NIconDownload from "@/components/NIcon/NIconDownload";
import NIconDelete from "@/components/NIcon/NIconDelete.vue";
// import NIconMore from "@/components/NIcon/NIconMore";
// import NIconChat from "@/components/NIcon/NIconChat";
// import NIconAdd from "@/components/NIcon/NIconAdd";
// import NIconCalendar from "@/components/NIcon/NIconCalendar";
// import NIconDone from "@/components/NIcon/NIconDone";
// import NIconEdit from "@/components/NIcon/NIconEdit";
// import NIconFail from "@/components/NIcon/NIconFail";
// import NIconFilter from "@/components/NIcon/NIconFilter";
// import NIconHide from "@/components/NIcon/NIconHide";
// import NIconImage from "@/components/NIcon/NIconImage";
// import NIconLocation from "@/components/NIcon/NIconLocation";
// import NIconMoreCircle from "@/components/NIcon/NIconMoreCircle";
// import NIconMoreSquare from "@/components/NIcon/NIconMoreSquare";
// import NIconArrowDown from "@/components/NIcon/NIconArrowDown";
// import NIconArrowDown2 from "@/components/NIcon/NIconArrowDown2";
// import NIconArrowDown3 from "@/components/NIcon/NIconArrowDown3";
// import NIconArrowDownCircle from "@/components/NIcon/NIconArrowDownCircle";
// import NIconArrowDownSquare from "@/components/NIcon/NIconArrowDownSquare";
// import NIconArrowRight from "@/components/NIcon/NIconArrowRight";
// import NIconArrowRight2 from "@/components/NIcon/NIconArrowRight2";
// import NIconArrowRight3 from "@/components/NIcon/NIconArrowRight3";
// import NIconArrowRightCircle from "@/components/NIcon/NIconArrowRightCircle";
// import NIconArrowRightSquare from "@/components/NIcon/NIconArrowRightSquare";
// import NIconArrowUp from "@/components/NIcon/NIconArrowUp";
// import NIconArrowUp2 from "@/components/NIcon/NIconArrowUp2";
// import NIconArrowUp3 from "@/components/NIcon/NIconArrowUp3";
// import NIconArrowUpCircle from "@/components/NIcon/NIconArrowUpCircle";
// import NIconArrowUpSquare from "@/components/NIcon/NIconArrowUpSquare";
// import NIconArrowLeft from "@/components/NIcon/NIconArrowLeft";
// import NIconArrowLeft2 from "@/components/NIcon/NIconArrowLeft2";
// import NIconArrowLeft3 from "@/components/NIcon/NIconArrowLeft3";
// import NIconArrowLeftCircle from "@/components/NIcon/NIconArrowLeftCircle";
// import NIconArrowLeftSquare from "@/components/NIcon/NIconArrowLeftSquare";
// import NIconShow from "@/components/NIcon/NIconShow";
// import NIconSwap from "@/components/NIcon/NIconSwap";
// import NIconTick from "@/components/NIcon/NIconTick";
// import NIconUpload from "@/components/NIcon/NIconUpload";
// import NIconPaper from "@/components/NIcon/NIconPaper";
// import NIconMoney from "@/components/NIcon/NIconMoney";
// import NIconFolder from "@/components/NIcon/NIconFolder";
// import NIconWallet from "@/components/NIcon/NIconWallet";
// import NIconGraph from "@/components/NIcon/NIconGraph";
// import NIconBookmark from "@/components/NIcon/NIconBookmark";
// import NIconHeart from "@/components/NIcon/NIconHeart";
// import NIconPaperNegative from "@/components/NIcon/NIconPaperNegative";
// import NIconPaperFail from "@/components/NIcon/NIconPaperFail";
// import NIconPaperDownload from "@/components/NIcon/NIconPaperDownload";
// import NIconPaperUpload from "@/components/NIcon/NIconPaperUpload";
// import NIconSend from "@/components/NIcon/NIconSend";
// import NIconPassword from "@/components/NIcon/NIconPassword";
// import NIconWork from "@/components/NIcon/NIconWork";
// import NIconActivity from "@/components/NIcon/NIconActivity";
// import NIconMessage from "@/components/NIcon/NIconMessage";
// import NIconVideo from "@/components/NIcon/NIconVideo";
// import NIconPlus from "@/components/NIcon/NIconPlus";
// import NIconGame from "@/components/NIcon/NIconGame";
// import NIconBag3 from "@/components/NIcon/NIconBag3";
// import NIconTicketStar from "@/components/NIcon/NIconTicketStar";
// import NIconDiscount from "@/components/NIcon/NIconDiscount";
// import NIconBuy from "@/components/NIcon/NIconBuy";
// import NIconInfoCircle from "@/components/NIcon/NIconInfoCircle";
// import NIconInfoSquare from "@/components/NIcon/NIconInfoSquare";
// import NIconDanger from "@/components/NIcon/NIconDanger";
// import NIconDiscovery from "@/components/NIcon/NIconDiscovery";
// import NIconDocument from "@/components/NIcon/NIconDocument";
// import NIconTimeSquare from "@/components/NIcon/NIconTimeSquare";
// import NIconTimeCircle from "@/components/NIcon/NIconTimeCircle";
// import NIconVolumeUp from "@/components/NIcon/NIconVolumeUp";
// import NIconVolumeDown from "@/components/NIcon/NIconVolumeDown";
// import NIconVolumeOff from "@/components/NIcon/NIconVolumeOff";
// import NIconStar from "@/components/NIcon/NIconStar";
// import NIconTicket from "@/components/NIcon/NIconTicket";
// import NIconCamera from "@/components/NIcon/NIconCamera";
// import NIconProfile from "@/components/NIcon/NIconProfile";
// import NIconAddUser from "@/components/NIcon/NIconAddUser";
import NIconUsers2 from "@/components/NIcon/NIconUsers2.vue";
// import NIconLogin from "@/components/NIcon/NIconLogin";
// import NIconVoice from "@/components/NIcon/NIconVoice";
// import NIconVoice3 from "@/components/NIcon/NIconVoice3";
// import NIconEditSquare from "@/components/NIcon/NIconEditSquare";
// import NIconPlay from "@/components/NIcon/NIconPlay";
// import NIconFilter3 from "@/components/NIcon/NIconFilter3";
// import NIconImage3 from "@/components/NIcon/NIconImage3";
// import NIconCall from "@/components/NIcon/NIconCall";
// import NIconCalling from "@/components/NIcon/NIconCalling";
// import NIconCallMissed from "@/components/NIcon/NIconCallMissed";
// import NIconCallSilent from "@/components/NIcon/NIconCallSilent";
// import NIconLock from "@/components/NIcon/NIconLock";
// import NIconUnlock from "@/components/NIcon/NIconUnlock";
// import NIconWhatsapp from "@/components/NIcon/NIconWhatsapp";
// import NIconLine from "@/components/NIcon/NIconLine";
// import NIconTelegram from "@/components/NIcon/NIconTelegram";
// import NIconFacebook from "@/components/NIcon/NIconFacebook";
// import NIconDoubleCheckmark from "@/components/NIcon/NIconDoubleCheckmark";
// import NIconCheckmark from "@/components/NIcon/NIconCheckmark";

export default {
  name: "NIcon",
  components: {
    NIconHome,
    // NIconBag,
    // NIconTruck,
    // NIconScan,
    // NIconCategory,
    NIconUsers,
    // NIconChart,
    // NIconSetting,
    // NIconSearch,
    // NIconNotification,
    // NIconLogout,
    // NIconMenu,
    // NIconClose,
    // NIconDownload,
    NIconDelete,
    // NIconMore,
    // NIconChat,
    // NIconAdd,
    // NIconCalendar,
    // NIconDone,
    // NIconEdit,
    // NIconFail,
    // NIconFilter,
    // NIconHide,
    // NIconImage,
    // NIconLocation,
    // NIconMoreCircle,
    // NIconMoreSquare,
    // NIconArrowDown,
    // NIconArrowDown2,
    // NIconArrowDown3,
    // NIconArrowDownCircle,
    // NIconArrowDownSquare,
    // NIconArrowRight,
    // NIconArrowRight2,
    // NIconArrowRight3,
    // NIconArrowRightCircle,
    // NIconArrowRightSquare,
    // NIconArrowUp,
    // NIconArrowUp2,
    // NIconArrowUp3,
    // NIconArrowUpCircle,
    // NIconArrowUpSquare,
    // NIconArrowLeft,
    // NIconArrowLeft2,
    // NIconArrowLeft3,
    // NIconArrowLeftCircle,
    // NIconArrowLeftSquare,
    // NIconShow,
    // NIconSwap,
    // NIconTick,
    // NIconUpload,
    // NIconPaper,
    // NIconMoney,
    // NIconFolder,
    // NIconWallet,
    // NIconGraph,
    // NIconBookmark,
    // NIconHeart,
    // NIconPaperNegative,
    // NIconPaperFail,
    // NIconPaperDownload,
    // NIconPaperUpload,
    // NIconSend,
    // NIconPassword,
    // NIconWork,
    // NIconActivity,
    // NIconMessage,
    // NIconVideo,
    // NIconPlus,
    // NIconGame,
    // NIconBag3,
    // NIconTicketStar,
    // NIconDiscount,
    // NIconBuy,
    // NIconInfoCircle,
    // NIconInfoSquare,
    // NIconDanger,
    // NIconDiscovery,
    // NIconDocument,
    // NIconTimeSquare,
    // NIconTimeCircle,
    // NIconVolumeUp,
    // NIconVolumeDown,
    // NIconVolumeOff,
    // NIconStar,
    // NIconTicket,
    // NIconCamera,
    // NIconProfile,
    // NIconAddUser,
    NIconUsers2,
    // NIconLogin,
    // NIconVoice,
    // NIconVoice3,
    // NIconEditSquare,
    // NIconPlay,
    // NIconFilter3,
    // NIconImage3,
    // NIconCall,
    // NIconCalling,
    // NIconCallMissed,
    // NIconCallSilent,
    // NIconLock,
    // NIconUnlock,
    // NIconWhatsapp,
    // NIconLine,
    // NIconTelegram,
    // NIconFacebook,
    // NIconDoubleCheckmark,
    // NIconCheckmark,
  },
  props: {
    icon: {
      type: String,
      default: "home",
    },
  },
};
</script>

<style scoped>
/* Todo:
Translate Tailwind with and height for better size proportion
on responsive
*/
.n-icon {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;

  svg {
    @apply w-full;
    @aookt h-full;
  }

  /* Size */
  @apply w-6;
  @apply h-6;

  &.xs {
    @apply w-4;
    @apply h-4;
  }

  &.sm {
    @apply w-5;
    @apply h-5;
  }

  &.md {
    @apply w-6;
    @apply h-6;
  }

  &.lg {
    @apply w-7;
    @apply h-7;
  }

  &.xl {
    @apply w-9;
    @apply h-9;
  }

  &.xxl {
    @apply w-12;
    @apply h-12;
  }
}
</style>
