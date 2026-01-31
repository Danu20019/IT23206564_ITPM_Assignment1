const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'mama adha gedhara innee',
      expected: 'මම අද ගෙදර ඉන්නේ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple food request',
      input: 'mama paadam karanavaa',
      expected: 'මම පාඩම් කරනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Going home statement',
      input: 'adha harima lassana dhavasak',
      expected: 'අද හරිම ලස්සන දවසක්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'adha harima kammaeLi dhavasak , ee nisaa mata kohee hari yanna oonee.',
      expected: 'අද හරිම කම්මැළි දවසක් , ඒ නිසා මට කොහේ හරි යන්න ඕනේ.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'discribe a person with contrast',
      input: 'eyaa harima hodha kenek, ee unaata eyaa harima pandithayi.',
      expected: 'එයා හරිම හොද කෙනෙක්, ඒ උනාට එයා හරිම පන්ඩිතයි.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'oyaa hodhata mahansi unoth , oyaata hodha rassaavak hambeyi.',
      expected: 'ඔයා හොදට මහන්සි උනොත් , ඔයාට හොද රස්සාවක් හම්බෙයි.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_007',
      name: 'Conditional complex sentence',
      input: 'adha vaessoth mata kohevath yanna baeri veyi.',
      expected: 'අද වැස්සොත් මට කොහෙවත් යන්න බැරි වෙයි.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_008',
      name: 'Conditional complex sentence',
      input: 'mama adha kalin vaeda aerunoth oyaava hambenna ennam.',
      expected: 'මම අද කලින් වැඩ ඇරුනොත් ඔයාව හම්බෙන්න එන්නම්.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'S'
    },
 
    // Questions
    {
      tcId: 'Pos_Fun_009',
      name: 'Simple question about state',
      input: 'oyaata ee una dheeta dhukayidha?',
      expected: 'ඔයාට ඒ උන දේට දුකයිද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_010',
      name: 'Question about time',
      input: 'oyaata adha maava hambenna enna puluvandha?',
      expected: 'ඔයාට අද මාව හම්බෙන්න එන්න පුලුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)', 
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite question request',
      input: 'oyaata mata eeka kiyanna puluvandha',
      expected: 'ඔයාට මට ඒක කියන්න පුලුවන්ද',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_012',
      name: 'Direct command',
      input: 'eeka thibba thaeninma thiyanna.',
      expected: 'ඒක තිබ්බ තැනින්ම තියන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
   
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_013',
      name: 'Morning greeting',
      input: 'suba dhavasak veevaa!',
      expected: 'සුබ දවසක් වේවා!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    //Polite request
    {
      tcId: 'Pos_Fun_014',
      name: 'Polite request for an object',
      input: 'karuNaakarala mata ara potha aran dhenavadha?',
      expected: 'කරුණාකරල මට අර පොත අරන් දෙනවද?',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    //impolite request
    {
      tcId: 'Pos_Fun_015',
      name: 'Impolite request for an object',
      input: 'mata ara potha aran dhiipan',
      expected: 'මට අර පොත අරන් දීපන්',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
 
    // Frequently used day-to-day expression
{
  tcId: 'Pos_Fun_016',
  name: 'Daily expression of tiredness',
  input: 'adha mata harima mahansi',
  expected: 'අද මට හරිම මහන්සි',
  category: 'Daily language usage',
  grammar: 'Simple sentence',
  length: 'S'
},


    // Tense Variations
    {
      tcId: 'Pos_Fun_017',
      name: 'Past tense action',
      input: ' mama iiyee gedhara aavee.',
      expected: 'මම ඊයේ ගෙදර ආවේ.',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_018',
      name: 'present tense plan',
      input: 'mama bath kanavaa.',
      expected: 'මම බත් කනවා.',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_019',
      name: 'future tense plan',
      input: 'api heta kohee hari yamu.',
      expected: 'අපි හෙට කොහේ හරි යමු.',
      category: 'Daily language usage',
      grammar: 'future tense',
      length: 'S'
    },
     
    // positive statements
    {
      tcId: 'Pos_Fun_020',
      name: 'Simple positive statement',
      input: 'mama heta enavaa oyaava hambenna.',
      expected: 'මම හෙට එනවා ඔයාව හම්බෙන්න.',
      category: 'Daily language usage',
      grammar: 'Positive statement',
      length: 'S'
    },

    // Negative Forms
    {
      tcId: 'Pos_Fun_021',
      name: 'Simple negation',
      input: 'mata heta enna venne naee oyaava hambenna.',
      expected: 'මට හෙට එන්න වෙන්නෙ නෑ ඔයාව හම්බෙන්න.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
   
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_022',
      name: 'Plural pronoun usage',
      input: 'eyaalaa heta enavaa',
      expected: 'එයාලා හෙට එනවා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    

    
    // Mixed Language
    {
      tcId: 'Pos_Fun_023',
      name: 'English brand term embedded',
      input: 'mama oyaata facebook request ekak dhaemma eeka accept karanna.',
      expected: 'මම ඔයාට facebook request එකක් දැම්ම ඒක accept කරන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
   
    
    // Time Formats
    {
      tcId: 'Pos_Fun_024',
      name: 'Future arrival time statement',
      input: 'mama udhee 7 vedhdhi ennam campus ekata.',
      expected: 'මම උදේ 7 වෙද්දි එන්නම් campus එකට.',
      category: 'aily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Medium Length
    {
      tcId: 'Pos_Fun_025',
      name: 'Medium length conversation',
      input: 'anee mama godak try karaa magee ATM card eka vaeda karanne naee , oyaata puluvandha mama oyaage account ekata salli transfer karoth mata salli tika aran dhenna. oyaage account details mata evannako ikmanatama mata hadhissi tikak.',
      expected: 'අනේ මම ගොඩක් try කරා මගේ ATM card එක වැඩ කරන්නේ නෑ , ඔයාට පුලුවන්ද මම ඔයාගෙ account එකට සල්ලි transfer කරොත් මට සල්ලි ටික අරන් දෙන්න. ඔයාගෙ account details මට එවන්නකො ඉක්මනටම මට හදිස්සි ටිකක්.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    // Long formal paragraph with names, places, and numbers
{
  tcId: 'Pos_Fun_026',
  name: 'Long formal news-style paragraph conversion',
  input: 'amerikaavee las vegas paevathi 41 vana looka vivaahaka ruu raejina tharagaavaliyee thevana sThaanaya dhinaagaeniimata shrii lankaaven sahaBhaagii vuu sabiinaa yuusaf samathva thibenavaa.mema tharaGAya merata veelaaven adha (30) peravaruvee avasan vuNaa.tharagaavaliyee kiruLa himikara gaeniimata samath vuNee, thaayilanthayen sahaBhaagii vuu tharagakaariyayi.mema tharagaya saDHAhaa lookayee rataval 60kata aDhika ruu raejiniyan pirisak ek viya.',
  expected: 'අමෙරිකාවේ ලස් වෙගස් පැවති 41 වන ලෝක විවාහක රූ රැජින තරගාවලියේ තෙවන ස්ථානය දිනාගැනීමට ශ්‍රී ලන්කාවෙන් සහභාගී වූ සබීනා යූසෆ් සමත්ව තිබෙනවා.මෙම තරඟය මෙරට වේලාවෙන් අද (30) පෙරවරුවේ අවසන් වුණා.තරගාවලියේ කිරුළ හිමිකර ගැනීමට සමත් වුණේ, තායිලන්තයෙන් සහභාගී වූ තරගකාරියයි.මෙම තරගය සඳහා ලෝකයේ රටවල් 60කට අධික රූ රැජිනියන් පිරිසක් එක් විය.',
  category: 'Names / places / common English words',
  grammar: 'Past tense',
  length: 'L'
},


  ],
  

  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata     oonee  eeka',
      expected: 'මට ඕනෑ ඒක',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: ' mama heta gedhara yanavaaaoyath enavadha yanna maath ekka?',
      expected: 'මම හෙට ගෙදර යනවා, ඔයත් එනවද යන්න මාත් එක්ක?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaangsupiriyaane',
      expected: 'මචාන්ග් සුපිරියානෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Request containing English abbreviations',
      input: 'mata ASAP oyaage OTPeka kiyanavadha?',
      expected: 'මට ASAP ඔයාගෙ OTP එක කියනවද?',
      category: 'Mixed Singlish + English',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Informal emotional expression with spacing variation',
      input: 'anee eekata               nam mata godak dhuka hithuna',
      expected: 'අනේ ඒකට නම් මට ගොඩක් දුක හිතුන',
      category: 'Slang / informal language',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mata ASAP eeka oonee',
      expected: 'මට ASAP ඒක ඕනෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee?',
      expected: 'ඔයා කොහෙද ඉන්නේ?',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eyi bro eeka set karala denna',
      expected: 'එයි bro ඒක set කරල දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
