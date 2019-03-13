describe("The assignment of Salpo", function() {
	it("Login to salpo site", function() {
		
		browser.ignoreSynchronization = true;
		browser.get("https://www.salpo.com/");
		element(by.id("menu-item-search")).click();
		element(by.css("input[name='s']")).sendKeys("CRM");
		element(by.css("input[type='submit']")).click();
		let list= element.all(by.css("article[itemscope='itemscope']"));
		expect(list.count()).toBe(10);
		element.all(by.css("article[itemscope='itemscope']")).first().click();
		expect(element(by.css("a[title='Permanent Link: Salpo CRM reviewed by Finances Online']")).isPresent()).toBe(true);
	})
})