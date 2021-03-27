import styles from './button.module.scss';

export function Button(props) {
    const { primary, accent, children: caption, onClick } = props;
    let className = styles.button;
    primary && (className += ` ${styles.primary}`);
    accent && (className += ` ${styles.accent}`);

    return (
        <button type="button" onClick={onClick} className={className}>
            { caption}
        </button>
    )
}