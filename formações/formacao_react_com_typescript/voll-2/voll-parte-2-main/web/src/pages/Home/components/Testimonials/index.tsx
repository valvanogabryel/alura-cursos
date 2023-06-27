import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--azul-escuro);
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const TestimonialsWrapper = styled.div`
  max-width: 50rem;
  margin: auto;
  margin-bottom: 2.5rem;
`;

const StyledTestimonial = styled.div`
  p {
    color: #90989f;
    line-height: 1.2125rem;
    margin: 0;
  }

  .testimonial-author {
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
    padding-bottom: 1rem;
    color: var(--cinza);
    border-bottom: 1px solid #e7ebef;
  }
`;

export function Testimonials() {
  return (
    <section>
      <SectionTitle>Depoimentos</SectionTitle>

      <TestimonialsWrapper>
        <StyledTestimonial>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <p className="testimonial-author">Júlio, 40 anos, São Paulo/SP.</p>
        </StyledTestimonial>
        <StyledTestimonial>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>
          <p className="testimonial-author">Júlio, 40 anos, São Paulo/SP.</p>
        </StyledTestimonial>
        <StyledTestimonial>
          <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores.
          </p>
          <p className="testimonial-author">Júlio, 40 anos, São Paulo/SP.</p>
        </StyledTestimonial>
      </TestimonialsWrapper>
    </section>
  );
}
