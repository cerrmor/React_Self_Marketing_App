//testing configeration file to reduce repeat import calls and facilitate running mocking tests

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});