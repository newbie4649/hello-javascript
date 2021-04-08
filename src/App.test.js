describe("TestHelloWorld", () => {
  test("何も指定されていない場合は既定の挨拶を返す", () => {
    expect(helloWorld()).toBe("Hello from JavaScript");
  });
  test("指定された名前で挨拶を返す", () => {
    expect(helloWorld("VSCode")).toBe("Hello from VSCode");
  });
});

function helloWorld(name = "JavaScript") {
  return `Hello from ${name}`;
}
