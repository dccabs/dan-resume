import React from 'react';
import Banner from './index';

describe('Banner', () => {
  it('renders the title and children correctly', () => {
    const title = 'Hello there';
    const children = 'This is a banner';

    cy.mount(<Banner title={title}>{children}</Banner>);

    cy.get('[data-test-id="banner"]').should('contain', title);
    cy.get('[data-test-id="banner"]').should('contain', children);
  });
});
