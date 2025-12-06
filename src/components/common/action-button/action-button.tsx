import { type PropType, computed, defineComponent, ref } from 'vue';
import { ElButton, ElTooltip } from 'element-plus';
import type { ButtonInstance, ButtonProps, ElTooltipProps, TooltipInstance } from 'element-plus';
import { cn, isEmpty } from '@/utils';
import type { IconifyIconProps, LocalIconProps } from '@/components/common/app-icon';
import { omit } from 'lodash-es';
import { SizeEnum } from '@/enums';
import { IconifyIcon, LocalIcon } from '@/components/common/app-icon';
import './action-button.scss';

type OmitLocalIconProps = Omit<LocalIconProps, 'name'>;
type OmitIconifyIconProps = Omit<IconifyIconProps, 'name'>;

export default defineComponent({
  name: 'ActionButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconType: {
      type: String as PropType<IconComponent>,
      default: 'iconify',
    },
    localIconProps: {
      type: Object as PropType<OmitLocalIconProps>,
      default: undefined,
    },
    iconifyIconProps: {
      type: Object as PropType<OmitIconifyIconProps>,
      default: undefined,
    },
    iconifyClass: {
      type: String,
      default: undefined,
    },
    tipProps: {
      type: Object as PropType<Partial<ElTooltipProps>>,
      default: undefined,
    },
    btnProps: {
      type: Object as PropType<Partial<ButtonProps>>,
      default: undefined,
    },
    btnClass: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<GetObjectValues<typeof SizeEnum>>,
      default: 'default',
    },
  },
  setup(props, { expose, attrs }) {
    /** 按钮大小样式映射 */
    const btnSizeStyleMap: {
      [key in GetObjectValues<typeof SizeEnum>]: string;
    } = {
      large: 'size-8!',
      default: 'size-7!',
      small: 'size-6!',
    };

    /** 是否是本地图标 */
    const isLocalIcon = computed(() => {
      return props.iconType === 'local';
    });

    /** 获取 iconify 图标属性 */
    const getIconifyIconProps = computed(() => {
      const defaultProps: Partial<OmitIconifyIconProps> = {};
      const iconifyProps = omit(props.iconifyIconProps || {}, ['name']);
      const iconifyClass = { class: cn('text-base', props.iconifyClass) };
      console.log({ ...defaultProps, ...iconifyProps, ...iconifyClass }, 'iconifyProps');

      return { ...defaultProps, ...iconifyProps, ...iconifyClass };
    });

    /** 获取本地图标属性 */
    const getLocalIconProps = computed(() => {
      const defaultProps: Partial<LocalIconProps> = {
        size: 16,
      };

      const localProps = omit(props.localIconProps || {}, ['name']);

      return { ...defaultProps, ...localProps };
    });

    const hideTooltip = computed(() => {
      return isEmpty(props.tipProps?.content);
    });

    /** 获取提示框属性 */
    const getTooltipProps = computed(() => {
      const defaultProps: Partial<ElTooltipProps> = {};
      return { ...defaultProps, ...props.tipProps };
    });

    /** 获取按钮属性 */
    const getBtnProps = computed(() => {
      const btnProps = omit(props.btnProps || {}, ['size']);

      const defaultProps: Partial<ButtonProps> = {
        text: true,
      };
      return { ...defaultProps, ...btnProps, ...attrs };
    });

    /** 获取当前按钮样式 */
    const getCurrentBtnStyle = computed(() => {
      return btnSizeStyleMap[props.size || 'default'];
    });

    /** 提示框实例 */
    const tooltipInstance = ref<TooltipInstance | null>(null);

    /** 获取提示框实例 */
    const getTooltipInstance = () => {
      return tooltipInstance.value;
    };

    /** 按钮实例 */
    const buttonInstance = ref<ButtonInstance | null>(null);

    /** 获取按钮实例 */
    const getButtonInstance = () => {
      return buttonInstance.value;
    };

    expose({
      getTooltipInstance,
      getButtonInstance,
    });

    /** 渲染按钮内容 */
    const renderButtonContent = () => {
      return !isLocalIcon.value ? (
        <IconifyIcon name={props.icon} {...getIconifyIconProps.value} />
      ) : (
        <LocalIcon name={props.icon} {...getLocalIconProps.value} />
      );
    };

    /** 渲染按钮 */
    const renderButton = () => {
      return (
        <ElButton
          ref={buttonInstance}
          {...getBtnProps.value}
          class={cn('action-button', getCurrentBtnStyle.value, props.btnClass)}
        >
          {{
            default: () => renderButtonContent(),
          }}
        </ElButton>
      );
    };

    return () => {
      // 单根节点：根据是否有 tooltip 返回不同的根节点
      if (!hideTooltip.value) {
        return (
          <ElTooltip ref={tooltipInstance} {...getTooltipProps.value}>
            {{
              default: () => renderButton(),
            }}
          </ElTooltip>
        );
      }

      return renderButton();
    };
  },
});
