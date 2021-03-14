import styles from './button.module.scss';

export function Button(props) {
    const { primary, accent, children: caption } = props;
    let className = styles.button;
    primary && (className += ` ${styles.primary}`);
    accent && (className += ` ${styles.accent}`);

    return (
        <button type="button" className={className}>
            { caption}
        </button>
    )
}