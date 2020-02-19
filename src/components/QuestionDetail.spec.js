import React from "react";
import { mapStateToProps, QuestionDetailDisplay } from "./QuestionDetail";
import renderer from "react-test-renderer";

describe("Question detail component", () => {
  describe("Container element", () => {
    describe("mapStateToProps", () => {
      it("should map state to props", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Space is big"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });

  describe("Display element", () => {
    it("should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="The meaning of life"
          body="42"
          answer_count={0}
          tags={["hitchhiking"]}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
