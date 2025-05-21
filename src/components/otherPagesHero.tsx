export default function OtherPagesHero({ pageName }: { pageName: string }) {
  return (
    <div className="page-header parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header-box">
              <h1 className="text-anime">{pageName}</h1>
              <nav className="wow fadeInUp" data-wow-delay="0.25s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
