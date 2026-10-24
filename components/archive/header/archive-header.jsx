import classess from "./archive-header.module.css";

export default function ArchiveHeader({ children }) {
  return (
    <header id={classess["archive-header"]}>
      <div className={classess.Header}>
        <h1>News Archive</h1>
        <span className={classess.subHeader}>Archives filtered by year</span>
      </div>
      {children}
    </header>
  );
}
