import styles from './buttton.module.scss';

export function Button(props) {
    const { primary, accent, children: caption } = props;
    let className = '';
    primary && (className += ` ${styles.primary}`);
    accent && (className += ` ${styles.accent}`);

    return (
        <button type="button" className={className}>
            { caption}
        </button>
    )
}