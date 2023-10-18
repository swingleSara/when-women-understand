import Hero from "../components/Hero";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div
        className="container-fluid bg-image d-flex flex-column"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/3-women-sitting-on-bench-near-the-flowers-GobsYxc_H_0')",
          height: "600px",
          alignContent: "center",
          alignSelf: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "sepia(33%)",
        }}
      >
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a
              class="navbar-brand d-flex flex-column fw-bold"
              href="#"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="mb-n1">When Women</span>
              <span>Understand</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="d-flex h-100">
          <div
            class="text-white text-start pb-5 ps-5 mb-5 grid row-gap-3"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="hero-text mb-3 pb-3">
              <h1
                class="py-2 mb-3 display-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We are silencing abuse
              </h1>
              <div class="py-2 fs-5">
                Let's put an end to psychlogical abuse together
              </div>
            </div>

            <a class="btn btn-outline-light btn-lg" href="#!" role="button">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="middle-content">
        <h3>We are here to put an end to psychological abuse</h3>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <h4>
          Finding Strength in Support: Your Guide to Seeking Help and Healing
          from Psychological Abuse{" "}
        </h4>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
      <div className="container-fluid">
        <h1>"Loren"</h1>
        <div>WHO Logo</div>
      </div>
      <h2>
        Beyond the Shadows: Unveiling Personal Journeys of Survivors of
        Psychological Abuse
      </h2>
      <div>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
      <Button />
      <div className="container-fluid">
        <div className="text-section">
          <h2>Lorem</h2>
          <Button />
        </div>
        <div>Image</div>
        <div>Quiz</div>
        <div>Footer</div>
      </div>
    </>
  );
};

export default HomePage;
