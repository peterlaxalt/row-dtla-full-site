import styled from 'styled-components';

const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ArtRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: ${props => (props.spacer ? '50px' : '0')};
`;

const Title = styled.h3`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  line-height: 30px;
  padding: 0 25px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 25px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  span {
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 25px;
  font-size: 19px;
  line-height: 28px;
  a {
    margin-top: 15px;
    color: #369bf7;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ArtProgram = () => {
  return (
    <ArtContainer>
      <ArtRow>
        <Title>75 Varick Street: Petra Cortright</Title>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/1_75 Varick Street Petra Cortright.jpg"
            alt=""
          />
          <span className="caption">
            1998 MTV Music Awards_baby doll dress “fs5x aircraft” by Petra
            Cortright, on display at 75 Varick
          </span>
        </LeftCol>
        <RightCol>
          Petra Cortright is a California-based artist working in video,
          painting, and digital media. Her intricate paintings use digital
          software to blend figurative and abstract elements and are printed on
          a variety of materials—most frequently linen, paper, and aluminum.
          Each of Cortright’s paintings begin with a digital file the artist
          refers to as a “mother file,” consisting of hundreds of Photoshop
          layers, composed by sampling found images and simulated digital
          brushstrokes. The layers are then edited, manipulated and transferred
          to a substrate through industrial printing processes. Her work, such
          as 1998 MTV Music Awards_baby doll dress “fs5x aircraft” at 75 Varick,
          are often titled to reflect file names and extensions, as well as
          search terms used to source found imagery.
        </RightCol>
      </ArtRow>
      <ArtRow>
        <Title>
          160 Varick Street: Serge Attukwei Clottey and Moffat Takadiwa
        </Title>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/2_160 Varick Street Serge Attukwei Clottey and Moffat Takadiwa.jpg"
            alt=""
          />
          <span className="caption">
            Generation Bond by Serge Attukwei Clottey, on display at 160 Varick
          </span>
        </LeftCol>
        <RightCol>
          Using his body as an object, Ghanaian artist Serge Attukwei Clottey
          creates performances and works with international media – as well as
          plastic yellow “gallons” (jerrycans) – to speak out about politics,
          religion, sex and tradition. Born in Ghana in 1985, Serge Attukwei
          Clottey exhibited internationally before he was able to show his work
          at home. His performances, with fellow members of the collective
          GoLokal, create a narrative around the process of collecting plastic
          “gallons” (jerrycans used in Ghana to transport and store water). The
          cans will be cut up and used to make masks, form canvases, or as basic
          building blocks for his installations, such as the wall hanging
          Generation Bond, installed at 160 Varick. In Ghanaian society,
          collecting water cans is a task traditionally assigned to women. The
          artist and GoLokal (all male) focus on challenging constrictive
          societal assumptions and hope to encourage broader dialog.
        </RightCol>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/3_160 Varick Street Serge Attukwei Clottey and Moffat Takadiwa.jpg"
            alt=""
          />
          <span className="caption">
            Superhighway of Coloniality by Moffat Takadiwa, on display at 160
            Varick
          </span>
        </LeftCol>
        <RightCol>
          Moffat Takadiwa, born in Karoi, Zimbabwe (1983) lives and works in
          Harare. An artist of the post-independence generation, Takadiwa has
          exhibited extensively in major institutions locally and
          internationally. His three-dimensional constructions focus on language
          and the role it plays in determining a national or cultural identity.
          The piece on view at 160 Varick, Superhighway of Coloniality, is made
          up of computer keys creating a hanging tapestry, kept together with
          fishing wire. Takadiwa believes the story of Zimbabwe was “written
          with these very keys” a condemnation of imperialist British rule. The
          tapestry is at once an aesthetic object and cultural text.
        </RightCol>
      </ArtRow>
      <ArtRow>
        <Title>225 Varick Street: Kour Pour</Title>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/4_160 Varick Street Serge Attukwei Clottey and Moffat Takadiwa.jpg"
            alt=""
          />
          <span className="caption">
            Oh So Delicate by Kour Pour, on display at 225 Varick Street
          </span>
        </LeftCol>
        <RightCol>
          Kour Pour’s time in his father’s carpet shop and his interest in
          popular culture have been synthesized into an ongoing series of carpet
          paintings, a series which Pour began during his last year at the Otis
          College of Art and Design in Los Angeles. Each were based on a rug or
          carpet the artist researched from exhibition and auction catalogues.
          The pieces generated intense collector interest and he continues
          creating the series while he explores other means. In recent years, he
          has also produced a series of paintings employing the use of paper
          pulp, which the artist began working with out of his interest in
          origami, and the lesser-known paper craft form tsugigami. Pour began
          making his own paper and mixing the pulp with pigments. After some
          experimentation, he came around to the idea of using the pigmented
          pulp in lieu of paint, sculpting the pulp onto panels covered with
          linen. The painting at 225 Varick, Oh So Delicate, made from heavily
          layered pulp and applied in gestural swaths, interestingly references
          Japanese Geological Survey maps, which Pour noticed for their
          similarities to western abstract expressionist paintings of the
          1960’s.
        </RightCol>
      </ArtRow>
      <ArtRow>
        <Title>155 Avenue of the Americas: Oscar Murillo</Title>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/5_155 Avenue of the Americas Oscar Murillo.jpg"
            alt=""
          />
          <span className="caption">
            Untitled (La era de la sinceridad) by Oscar Murillo on display at
            155 Avenue of the Americas
          </span>
        </LeftCol>
        <RightCol>
          Oscar Murillo is a contemporary Colombian painter and installation
          artist. Working in a wide-ranging practice incorporating diverse media
          and techniques, he investigates the cross-cultural ties of a
          globalized economy. Noted for his use of text, recycled materials, and
          random fragments, he frequently leaves his canvases to be slowly
          covered in debris, a process the artist has likened to aging cheese.
          Born in La Paila, Colombia in 1986, Murillo moved to London, England
          when he was 10. He graduated from the Royal College of Art in London
          and joined the David Zwirner gallery a year later in 2013. For his
          first major solo show in New York (2014), he transformed the gallery
          space into a fully functional chocolate factory, mimicking the
          factories in his native Colombia where generations of families had
          worked together. He is currently developing a long-term global
          project, titled Frequencies, working with school children around the
          world, effectively creating one large, internationally scattered work.
          Murillo lives and works in London.
        </RightCol>
      </ArtRow>
      <ArtRow>
        <Title>375 Hudson Street: Robert Kushner and Robert Swain</Title>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/6_375 Hudson Street Robert Kushner and Robert Swain.jpg"
            alt=""
          />
          <span className="caption">Malinalco (detail) by Robert Kushner</span>
        </LeftCol>
        <RightCol>
          Robert Kushner’s work has been exhibited extensively in the United
          States, Europe and Japan since 1975 when one of his paintings was
          included in the Whitney Biennial. When Kushner was in his twenties, he
          worked as a carpet restorer, and the palette and logic of fabric, of
          warp and weft, has remained at the core of his practice. This is true
          at the level of structure, not just aesthetics. His paintings are
          majestic, in their regal color, glorious floral depictions, and sheer
          size. Extraordinarily full, they burst with color and animation, like
          the gardens that do so much to inspire him. He paints his flowers
          directly from life using techniques to harness organic “chance
          operations” beloved of past avant garde artists, creating images that
          seem almost to sprout from the canvas in the same slightly random way
          that they would from an actual garden bed. His work balances these
          organic forms with more regimented structural ones. Though the works
          included in the show were very different, all are organized according
          to a principle of rigorous division. Blocks of color or metallic leaf
          demarcate them into zones, creating a push-pull of space, or as
          Kushner puts it, “a series of passages.” By making, and then breaking
          up, the pattern with the linear forms of flowers or plants, these
          forms seem to float atop the background.
          <a
            target="_blank"
            href="/static/images/news/lobby_art/Kushner Brochurwebsite.pdf"
          >
            View Brochure
          </a>
        </RightCol>
      </ArtRow>
      <ArtRow spacer={true}>
        <LeftCol>
          <img
            src="/static/images/news/lobby_art/7_375 Hudson Street Robert Kushner and Robert Swain.jpg.jpg"
            alt=""
          />
          <span className="caption">The work of Robert Swain</span>
        </LeftCol>
        <RightCol>
          For artist Robert Swain, color has been the primary focus of his
          painting practice for more than 50 years. It is both the content of
          his paintings and a relentless problem to be solved. Swain is
          currently one of the leading standard bearers of color research
          worldwide; starting in the late 1960s, he began to conceive his own
          singular color system. The pillars of his system are hue (a pure
          color), value (lightness/darkness of a color), and saturation (the
          intensity of the pure color). The color system Swain envisioned
          decades ago consisted of 30 distinct yet interrelated colors organized
          in incremental steps around a circle with no beginning or endpoint. He
          then ran each of those colors across a kind of Cartesian coordinate
          system of up to 33 incremental steps in value in one direction and 9
          degrees in saturation in the other, yielding an exhaustive color
          library of 4,896 distinct hues, each calibrated by eye and mixed by
          hand, an extraordinary feat to contemplate. The paintings on view,
          created specifically for this gallery, are utterly immersive in scale
          and present us with pure sensation, transitioning from the pristinely
          visual into the viscerally emotional. After five decades, Swain is
          focused now more than ever on the distinct sensations produced when
          unique colors are paired, rather than appearing individually. With
          each color emitting its own distinct spectral energy and emotional
          content, colors that are grouped yield vastly more complex and nuanced
          sensations than they would on their own. Color is experiential, and by
          witnessing it through Robert Swain’s unique lens and temperament, we
          truly understand its limitlessness, approaching the sublime. Color is
          life.
          <a
            target="_blank"
            href="/static/images/news/lobby_art/Swain-Hines-web.pdf"
          >
            View Brochure
          </a>
        </RightCol>
      </ArtRow>
    </ArtContainer>
  );
};

export default ArtProgram;
