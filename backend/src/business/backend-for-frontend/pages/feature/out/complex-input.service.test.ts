import { describe, expect, it } from 'vitest';

import { trpc } from '@/core/trpc/trcp-client';

import { ComplexInputService } from './complex-input.service';

const input: ComplexInputService.TInput = {
  date: new Date(2024, 0, 1, 1, 1, 1),
  number: 1,
  string: 'a',
  options: 'b',
  list_of_values: ['a', 'b'],
};

describe('complex-input.service', () => {
  it('Complex input', async () => {
    // When
    const output = await trpc.backendForFrontend.pages.feature.complexInput.query(input);

    // Then
    expect(output).toStrictEqual({
      ...input,
      date: '2024-01-01T00:01:01.000Z',
    });
  });
});
